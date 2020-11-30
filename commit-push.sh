    git status
    echo "--------------------------------"
    git add .
    git status
    echo "--------------------------------"
    echo "enter your commit message" >&2
    read COMMIT_MESSAGE
    echo "--------------------------------"
    git commit -m " ${COMMIT_MESSAGE} "
    echo "--------------------------------"
    git status
    echo "--------------------------------"
    git status
