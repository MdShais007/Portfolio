from django.shortcuts import render,redirect

from .forms import ContactForm
# Create your views here.

def index(request):
    if request.method == 'POST':
       
        form= ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form=ContactForm()
        return render(request,'index.html',{'form':form})

      
   


def about(request):
    return render(request,'about.html')


def project(request):
    return render(request,'project.html')

def contact(request):
   
    if request.method == 'POST':
       
        form= ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form=ContactForm()
        return render(request,'contact.html',{'form':form})

            

