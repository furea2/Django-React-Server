from django.urls import path
from django.conf.urls import url, include
from .views import ProfileView, IndexView, MypageView

# app_name = 'member'
urlpatterns = [
    url(r'^mypage/$', MypageView.as_view(), name="mypage"),
    url(r'^(?P<username>[\w]+)/$', ProfileView.as_view(), name="profile")
]
