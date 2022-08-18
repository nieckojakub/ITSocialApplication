from django.urls import path
from .views import login, home_route, register, start_route

urlpatterns = [
    path('', start_route),
    path('login', login, name='login'),
    path('register', register, name='register'),
    path('home', home_route, name='home')
]