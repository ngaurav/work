from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from .models import Mail, Polt
from django.views.decorators.csrf import csrf_exempt
from django.db.models import F

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

@csrf_exempt
def count1(request):
    if request.method == 'POST':
        id = request.POST['id']
        inc = int(request.POST['inc'])
        try:
            polt = Polt.objects.get(pk=id)
            polt.count1 = F('count1') + inc
            polt.save()
        except:
            return HttpResponseBadRequest()
        ret = {}
        for p in Polt.objects.all():
            ret[str(p.pk)] = str(p.count1)
        return JsonResponse(ret)
    else:
        return HttpResponseBadRequest()
