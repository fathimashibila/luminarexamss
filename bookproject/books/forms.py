from django import forms
from books.models import Book
from django.forms import ModelForm


class Bookcreateform(forms.Form):
    book_name = forms.CharField(max_length=120)
    author = forms.CharField(max_length=120)
    price = forms.IntegerField()
    pages = forms.IntegerField()

    def clean(self):
        cleaned_data=super(Bookcreateform, self).clean()
        bookname=cleaned_data.get('book_name')
        price=cleaned_data.get('price')
        pages=cleaned_data.get('pages')
        book=Book.objects.filter(book_name=bookname)
        if book:
            msg="book with name already exist"
            self.add_error('book_name',msg)
        if (price <100):
            msg="please put correct price"
            self.add_error('price',msg)
        if (pages <50):
            msg="page should less than 50"
            self.add_error('pages',msg)


class Bookcreateform(ModelForm):
    class Meta:
        model = Book
        fields = "__all__"
class BookUpdateForm(ModelForm):
    class Meta:
        model=Book
        fields="__all__"