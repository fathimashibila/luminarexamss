from django.shortcuts import render,redirect

# Create your views here.
from books.forms import Bookcreateform,BookUpdateForm
from books.models import Book

def BookCreate(request):
    template_name="bookcreate.html"
    form=Bookcreateform()
    context={}
    context["form"]=form
    if request.method=="POST":
        form=Bookcreateform(request.POST)
        if form.is_valid():
            book_name = form.cleaned_data.get("book_name")
            author = form.cleaned_data.get("author")
            price = form.cleaned_data.get("price")
            pages = form.cleaned_data.get("pages")
            obj=Book(book_name=book_name,author=author,price=price,pages=pages)
            obj.save()
            qs=Book.objects.all()
            context["books"]=qs
            return render(request, template_name, context)
        else:
            context["form"]=form
            return render(request, template_name, context)

    return render(request,template_name,context)

def viewbook(request,pk):
    template_name="viewbook.html"
    qs=Book.objects.get(id=pk)
    context={}
    context["book"]=qs
    return render(request,template_name,context)

def deletebook(request,pk):
    Book.objects.get(id=pk).delete()
    return redirect(BookCreate)
def updatebook(request,pk):
    book=Book.objects.get(id=pk)
    books=Bookcreateform(instance=book)
    context={}
    context["book"]=books
    if request.method=="POST":
        form=BookUpdateForm(instance=book,data=request.POST)
        if form.is_valid():
            form.save()
            return redirect(BookCreate)
    return render(request,"bookupdate.html",context)