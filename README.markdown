# MathType to MathJax Converter

A simple web tool to convert MathType LaTeX code into embeddable MathJax-compatible HTML or JSON format.

## Demo
Check out the live demo here: [https://xn--msieu-goa8b.vn/github/mathtype-to-mathjax](https://xn--msieu-goa8b.vn/github/mathtype-to-mathjax)

## Features
- Convert MathType-generated LaTeX code to clean HTML for MathJax rendering.
- Export cleaned LaTeX as a JSON object.
- Copy output (HTML or JSON) to clipboard with a single click.
- Responsive design for desktop and mobile devices.
- Cleans unnecessary formatting (e.g., `\rm`, `\text`) from MathType output.

## How to Use
1. Enter your MathType LaTeX code in the textarea.
2. Click "Chuyển đổi sang HTML" to get embeddable HTML code.
3. Click "Chuyển đổi sang JSON" to get a JSON representation of the LaTeX.
4. Use the "Sao chép" button to copy the output to your clipboard.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lemasieu/mathtype-to-mathjax.git
   ```
2. Open `index.html` in a web browser with internet access (to load MathJax from CDN).

## Files
- `index.html`: Main HTML file with the user interface.
- `script.js`: JavaScript logic for conversion and copying.
- `styles.css`: CSS for styling the interface.

## Dependencies
- MathJax (loaded via CDN: `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js`).

## Contributing
Feel free to fork this repository, submit issues, or send pull requests to improve the tool.

## License
This project is open-source. See the [LICENSE](LICENSE) file for details (add your preferred license, e.g., MIT).

## Author
- Lê Mẫn Siêu (lemasieu)