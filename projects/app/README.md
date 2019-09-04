# pytest-django-react

This is part III of the Pytest Series by Jack Camier


Inspirations of this talk are from the following people, blogs, etc

Valentino Gagliardi:

https://www.valentinog.com/blog/drf/

Brad Traversy:

https://www.youtube.com/watch?v=Uyei2iDA4Hs
https://www.youtube.com/watch?v=GieYIzvdt2U
https://www.youtube.com/watch?v=BmL8iaLMnQ0

Django Project:
https://www.djangoproject.com

Django REST framework:
https://www.django-rest-framework.org/

React:
https://reactjs.org/

Brian Okken:
https://pragprog.com/book/bopytest/python-testing-with-pytest

After creating app, go to http://localhost:8000/api/leads/  

# To Run Test  

first navigate to root of directory app and install necessary libs using command  

>npm install  

assuming all the django dependencies are installed then run the server using command  

>python manage.py make migrations  
>python manage.py migrate  
>python manage.py runserver    

then open another terminal and navigate to root of directory app and run the following command to generate test results  

>npm test  

if you want to test results upon changing the code , the following command can be used  

>npm run testwatch  

#NOTE  

the results of the tests will be displayed in the terminal.  
