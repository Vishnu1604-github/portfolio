
import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Create directories if they don't exist
os.makedirs('static/videos', exist_ok=True)
os.makedirs('static/docs', exist_ok=True)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/static/docs/<path:filename>')
def serve_resume(filename):
    return send_from_directory('static/docs', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
