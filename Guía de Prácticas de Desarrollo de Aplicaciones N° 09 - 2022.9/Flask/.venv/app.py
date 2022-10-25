"""
from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return "Hello, Flask!"
"""

"""
from flask import Flask
app = Flask(__name__)
from flask import render_template

@app.route('/index')
def index():
    usuario = {'nombre':'fede'}
    return render_template('index.html', titulo="Inicio", usuario=usuario)
"""
"""
from flask import Flask
app = Flask(__name__)
from flask import render_template

@app.route('/prueba')
def index():
 usuario = {'nombre':'fede'}
 pubs = [{'autor':{'usuario':'Juan'},'pub':'Bonito dia en Barcelona'},
    {'autor':{'usuario':'Maria'},'pub':'Hoy tuve una buena tarde en el cine'}
 ]
 return render_template('prueba.html', titulo="Inicio", usuario=usuario, pubs=pubs)
"""

"""
from flask import Flask
app = Flask(__name__)
from flask import render_template

@app.route('/prueba')
def index():
 usuario = {'nombre':'2020227221'}
 pubs = [   {'Alumno':{'nombre':'Jeanpierre'},'codigo':'2020227221','modalidad':'Virtual'},
            {'Alumno':{'nombre':'Sergio'},'codigo':'2020247521','modalidad':'Presencial'},
            {'Alumno':{'nombre':'Mauricio'},'codigo':'2020177721','modalidad':'Presencial'}]
 
 return render_template('Ejer1.html', titulo="Inicio", usuario=usuario,pubs=pubs)

"""

from flask import Flask
app = Flask(__name__)
from flask import render_template

@app.route('/prueba')
def index():
 consola = {'consola':'Consolas'}
 pubs = [   {'Nombre':'Nintendo Swich','FLanzamiento':'2019','Mando':'Joy-con','imagen':'https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one'},
            {'Nombre':'PlayStation 5','FLanzamiento':'2020','Mando':'Dualsense','imagen':'https://depor.com/resizer/F6do1WzKmdlsAFMY-sqEgObvAjo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GXE3EJZ6KFBEVAHTSNH2TCNLWE.jpg'},
            {'Nombre':'PlayStation 4','FLanzamiento':'2013','Mando':'Dualshock 4','imagen':'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$'},
            {'Nombre':'PlayStation 3','FLanzamiento':'2006','Mando':'Dualshock 3','imagen':'https://http2.mlstatic.com/D_NQ_NP_947069-MPE51659109529_092022-V.jpg'},
            {'Nombre':'Xbox Series S','FLanzamiento':'2020','Mando':'Xbox Wireless Series X/S','imagen':'https://storage.googleapis.com/guvery-cdn/public_images/items/239.png'}]
 
 return render_template('Consolas.html', titulo="Inicio", consola=consola,pubs=pubs)
