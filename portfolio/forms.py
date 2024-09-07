from django import forms
from django.forms import ModelForm , TextInput, EmailInput, Textarea

from . models import contact

class ContactForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
               super().__init__(*args, **kwargs)
               for key, field in self.fields.items():
                 field.label = ""
    class Meta:
        model=contact
        fields=['user_name','email','message']
        

        widgets={
            
             'email': EmailInput(attrs={
                'class': "form-control", 
                'style': 'width:80%; margin:auto;',
                'placeholder': 'Email'
                }),
                'user_name':TextInput(attrs={
                'class': "form-control", 
                'style': 'width:80%; margin:auto; margin-top:20px;',
                'placeholder': 'Full Name'
                }),

                'message':Textarea(attrs={
                'class': "form-control", 
                'style': 'width:80% ; margin:auto;',
                'placeholder': 'Text Message'
                })
        }
            