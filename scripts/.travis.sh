#!/bin/bash

set -ev

npm run lint
make formatCheck
npm run build
