from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from .models import Mail, Polt

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

def count(request):
    id = request.POST['id']
    inc = request.POST['inc']
    polt = Polt.objects.get(pk=id)
    polt.count1 = F('count1')+inc
    polt.save()
    
