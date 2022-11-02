############################ urls.py ######################################
from django.urls import path
from hello import views
urlpatterns = [
    #path("", views.home, name="home"),
    path("", views.index, name="index"),
    path('add/', views.add, name='add'),
    path('add/addrecord/', views.addrecord, name='addrecord'),

    path('add/addrecord/discount/', views.discount, name='discount'),

    path('delete/<int:id>', views.delete, name='delete'),
    path('update/<int:id>', views.update, name='update'),
    path('update/updaterecord/<int:id>', views.updaterecord, name='updaterecord'),
]
