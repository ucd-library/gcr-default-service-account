#! /bin/bash

PROJECT_ID=
CONTAINER_NAME=test-default-service-account
IMAGE=gcr.io/$PROJECT_ID/$CONTAINER_NAME

gcloud builds submit --tag $IMAGE

gcloud beta run deploy $CONTAINER_NAME \
  --image $IMAGE \
  --platform managed