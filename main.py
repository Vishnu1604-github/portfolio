
from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Required for sessions

@app.route('/')
def opening():
    if session.get('has_visited'):
        return redirect('/home')
    session['has_visited'] = True
    return render_template('opening.html')

@app.route('/home')
def home():
    session['has_visited'] = True
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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
