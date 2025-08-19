let currentOutput = '';

function cleanLatex(latexCode) {
    let cleanedCode = latexCode.replace(/\\(rm|text|bf|it|sf|tt|cal|mit|oldstyle|mathit|mathcal|mathbf|mathit|textnormal){([^}]*)}/g, "$2");
    cleanedCode = cleanedCode.replace(/\\ /g, "").replace(/\\,/g, "").replace(/\\:/g, "");
    cleanedCode = cleanedCode.replace(/\u00A0/g, " ");
    cleanedCode = cleanedCode.replace(/[\n\t]/g, " ");
    cleanedCode = cleanedCode.replace(/\s+/g, " ").trim();
    return cleanedCode;
}

function convert(outputType) {
    const latexInput = document.getElementById('latexInput').value;
    let cleanedLatex = cleanLatex(latexInput);

    const outputContainer = document.getElementById('outputContainer');
    const statusMessage = document.getElementById('statusMessage');
    const copyBtn = document.getElementById('copyBtn');
    
    if (!outputContainer || !statusMessage || !copyBtn) {
        console.error("Lỗi: Không tìm thấy một hoặc nhiều phần tử HTML. Hãy đảm bảo script.js được tải sau nội dung HTML.");
        return;
    }

    // Reset nội dung
    outputContainer.textContent = '';
    statusMessage.textContent = '';
    copyBtn.style.display = 'none';

    if (cleanedLatex === '') {
        outputContainer.textContent = 'Vui lòng nhập mã LaTeX.';
        return;
    }

    if (outputType === 'html') {
        currentOutput = `<div>$${cleanedLatex}$</div>`.trim();
        outputContainer.textContent = currentOutput;
        copyBtn.style.display = 'block';
        statusMessage.textContent = 'Mã HTML nhúng đã được tạo!';
        statusMessage.style.color = 'var(--success-color)';
    } else if (outputType === 'json') {
        const formulaObject = { "formula": cleanedLatex, "format": "latex" };
        currentOutput = JSON.stringify(formulaObject, null, 2);
        outputContainer.textContent = currentOutput;
        copyBtn.style.display = 'block';
        statusMessage.textContent = 'Mã JSON đã được tạo!';
        statusMessage.style.color = 'var(--success-color)';
    }
}

// Gắn sự kiện động
document.addEventListener('DOMContentLoaded', () => {
    const htmlBtn = document.querySelector('button:nth-child(1)');
    const jsonBtn = document.querySelector('button:nth-child(2)');
    if (htmlBtn) htmlBtn.addEventListener('click', () => convert('html'));
    if (jsonBtn) jsonBtn.addEventListener('click', () => convert('json'));
});

function copyOutput() {
    const outputContainer = document.getElementById('outputContainer');
    const statusMessage = document.getElementById('statusMessage');
    const outputText = outputContainer.textContent;

    navigator.clipboard.writeText(outputText).then(() => {
        statusMessage.textContent = 'Đã sao chép vào clipboard!';
        statusMessage.style.color = 'var(--success-color)';
    }).catch(err => {
        statusMessage.textContent = 'Không thể sao chép: ' + err;
        statusMessage.style.color = 'var(--error-color)';
    });
}