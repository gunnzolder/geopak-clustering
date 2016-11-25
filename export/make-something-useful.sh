cd ./export;
mkdir android/; 
mkdir android/drawable-xxxhdpi; 
mkdir android/drawable-xxhdpi; 
mkdir android/drawable-xhdpi; 
mkdir android/drawable-hdpi; 
mkdir android/drawable-mdpi;
mkdir android/mipmap-xxxhdpi; 
mkdir android/mipmap-xxhdpi; 
mkdir android/mipmap-xhdpi; 
mkdir android/mipmap-hdpi; 
mkdir android/mipmap-mdpi;

# moving android app icon

for file in $(find . -type f -iname 'ic_launcher-xxxhdpi*'); do
  mv "$file" "android/mipmap-xxxhdpi/${file/-xxxhdpi/}"
done

for file in $(find . -type f -iname 'ic_launcher-xxhdpi*'); do
  mv "$file" "android/mipmap-xxhdpi/${file/-xxhdpi/}"
done

for file in $(find . -type f -iname 'ic_launcher-xhdpi*'); do
  mv "$file" "android/mipmap-xhdpi/${file/-xhdpi/}"
done

for file in $(find . -type f -iname 'ic_launcher-hdpi*'); do
  mv "$file" "android/mipmap-hdpi/${file/-hdpi/}"
done

for file in $(find . -type f -iname 'ic_launcher-mdpi*'); do
  mv "$file" "android/mipmap-mdpi/${file/-mdpi/}"
done

# moving android app assets

for file in $(find . -type f -iname '*-xxxhdpi*'); do
  mv "$file" "android/drawable-xxxhdpi/${file/-xxxhdpi/}"
done
for file in $(find . -type f -iname '*-xxhdpi*'); do
  mv "$file" "android/drawable-xxhdpi/${file/-xxhdpi/}"
done
for file in $(find . -type f -iname '*-xhdpi*'); do
  mv "$file" "android/drawable-xhdpi/${file/-xhdpi/}"
done
for file in $(find . -type f -iname '*-hdpi*'); do
  mv "$file" "android/drawable-hdpi/${file/-hdpi/}"
done
for file in $(find . -type f -iname '*-mdpi*'); do
  mv "$file" "android/drawable-mdpi/${file/-mdpi/}"
done


# moving ios app assets

mkdir ios;

for file in $(find . -type f -iname '*.png' ! -name '*dpi*' ! -name '*-screen-*'); do
  mv "$file" "ios/$file"
done

# moving screens

mkdir screens;
mkdir screens/android;
mkdir screens/ios;


for file in $(find . -type f -iname '*-screen-android*'); do
  mv "$file" "screens/android/${file/-screen-android/}"
done

for file in $(find . -type f -iname '*-screen-ios*'); do
  mv "$file" "screens/ios/${file/-screen-ios/}"
done