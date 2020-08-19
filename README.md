# Strange Frontier
## Character Sheet Manager

### Planned Functionality
* Create and save multiple characters
* Customize name, species, attributes, and more
* Create and add equipment and weapons that affect character stats
* Create custom movesets with 5 regular moves, 3 exotic moves, a shift, and a flash
* Store excess moves in a movebank
* Activate stat-affecting moves on a round based timer
* Manage character health points
* Write and save notes

### How to install
1. Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:
`export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools`
2. Open an Android emulator using Android Studio
3. Navigate to project root folder in console
4. `npm i`
5. `npm install -g react-native-cli`
6. `npm install -g expo-cli`
7. `react-native start`
8. Open a second console window
9. Navigate to project root folder
10. `react-native run-android`
11. Application should be running in emulator
