from django.shortcuts import render
from django.http import HttpResponse
import sys
sys.path.append("ACCELPROITPROJECT/pethost/cooldog")
from re_selfdb import SQLITE
db = SQLITE("petdb.sqlite3")
def index(request):
    if request.COOKIES.get("username"):
        pass
    return render(request, "base.html")
    return HttpResponse("<h4>Проверка работы</h4>")
def login(request):
    if request.method == "GET":
       return render(request, "login_page.html")
    if request.method == "POST":
        username = request.POST.get("lgn")
        pswd = request.POST.get("pswd")
        if db.get(username, "passwords") == pswd:
            r = render(request, "logged.html")
            r.set_cookie("username", username)
        else:
           context = {"error": "неПРАВИЛЛЬНЫЙ ПАРОЛЛЬ"}
           return render(request, "login_page.html", context)
def reg(request):
    if request.method == "GET":
        return render(request, "reg_page.html")
    if request.method == "POST":
        username = request.POST.get("username")
        pswd = request.POST.get("pswd")
        phone = request.POST.get("phone")
        pswd2 = request.POST.get("pswd2")
        if pswd == pswd2:
            db.set(username, "passwords", pswd)
            db.set(username, "number", phone)
            return render(request, "logged.html")
        else:
            return render(request, "reg_name.html", {"error": "пароли не совпадают"})
    