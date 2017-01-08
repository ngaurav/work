from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from .models import Mail

# Create your views here.
def home(request):
    return render(request, 'core/index.html')

def ping(request):
    if not request.is_ajax():
        return HttpResponseBadRequest()
    else:
        mail = Mail()
        mail.name = request.POST['name']
        mail.phone = request.POST['phone']
        mail.email = request.POST['email']
        mail.subject = request.POST['subject']
        mail.message = request.POST['message']
        mail.save()
        return HttpResponse("ok")
