from django.urls import path
from .views import dashboard_data

urlpatterns = [
    path('data/', dashboard_data, name='dashboard_data'),
]
