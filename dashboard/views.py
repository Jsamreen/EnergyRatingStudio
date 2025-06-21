from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.core.mail import EmailMessage
import os

class ContactAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        name = request.data.get('name')
        contact = request.data.get('contact')
        email = request.data.get('email')
        subject = request.data.get('subject', 'New Contact Form Submission')
        message = request.data.get('message')
        file = request.FILES.get('attachment')

        full_message = f"""
        Name: {name}
        Contact: {contact}
        Email: {email}

        Message:
        {message}
        """

        email_message = EmailMessage(
            subject=subject,
            body=full_message,
            from_email=os.getenv("EMAIL_HOST_USER"),
            to=[os.getenv("EMAIL_HOST_USER")],
            reply_to=[email]
        )

        if file:
            email_message.attach(file.name, file.read(), file.content_type)

        try:
            email_message.send()
            return Response({"message": "Email sent successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
