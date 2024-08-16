"""
Servidor web simple para un diccionario de verbos en inglés.
Este módulo utiliza http.server para servir una página web estática con contenido de diccionario.
"""

from http.server import SimpleHTTPRequestHandler, HTTPServer

class MyHandler(SimpleHTTPRequestHandler):
    """
    Manejador de solicitudes HTTP personalizado.
    
    Este manejador sirve el archivo 'index.html' cuando se accede a la raíz del servidor ('/').
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.path = '/'  # Define 'path' inside __init__

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return SimpleHTTPRequestHandler.do_GET(self)

PORT = 8000

with HTTPServer(('', PORT), MyHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
