from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.conf import settings


class ContactAPIview(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        name = request.data.get("name")
        contact = request.data.get("contact")
        email = request.data.get("email")
        subject = request.data.get("subject", "Website Inquiry")
        message = request.data.get("message")
        attachment = request.FILES.get("attachment")

        # Compose email content
        email_body = f"""
You received a new message from the contact form:

Name: {name}
Contact: {contact}
Email: {email}
Subject: {subject}

Message:
{message}
        """

        try:
            email_msg = EmailMessage(
                subject=subject or "New Contact Form Submission",
                body=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=["talha@energyratingstudio.com.au"],
                reply_to=[email],
            )

            if attachment:
                email_msg.attach(attachment.name, attachment.read(), attachment.content_type)

            email_msg.send()
            return Response({"message": "Form submitted!"}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
