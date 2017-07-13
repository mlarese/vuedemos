#!/usr/bin/env bash
if ! [ -x "$(command -v npm)" ]; then
    echo "No npm command found. Install npm first!"
    exit
fi
cd "$(dirname "$0")"
npm run build

#copy dist\client*.js ..\..\..\public\AbsFrequentGuest\js\client.js
#copy dist\vendor*.js ..\..\..\public\AbsFrequentGuest\js\vendor.js
#copy dist\styles*.css ..\..\..\public\AbsFrequentGuest\css\styles.css