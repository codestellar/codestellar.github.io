# Generate HTML Documentation
pandoc notes.md -o index.html --template template.html --css template.css --self-contained --toc --toc-depth 2

pandoc interview-questions.md -o interview-questions.html --template template.html --css template.css --self-contained --toc --toc-depth 2