var issueList = {
    issues: [],

    displayIssues: function () {

        //if there is no display "there is no issue"
        if (this.issues.length === 0) {
            console.log("there is no issue in issue list");
        }
        //otherwise display list od issue-issueText
        else {
            var issueWithCompleteStatus = '';
            //completed===true -- () issueText
            //completed===false -- (X) issueText
            console.log('My Issues: ');
            for (var i = 0; i < this.issues.length; i++) {
                var issue = this.issues[i];
                if (issue.completed == true) {
                    issueWithCompleteStatus = '(X)' + issue.issueText;
                } else {
                    issueWithCompleteStatus = '(X)' + issue.issueText;
                }
                console.log(issueWithCompleteStatus);
            }
        }
    },

    addIssue: function (issueText) {
        this.issues.push({
            issueText: issueText,
            completed: false
        });
        this.displayIssues();
    },

    changeIssue: function (position, newIssue) {
        this.issues[position].issueText = newIssue;
        this.displayIssues();
    },

    deleteIssue: function (position) {
        this.issues.splice(position, 1);
        this.displayIssues();
    },

    toggleComplete: function (position) {
        var issue = this.issues[position];
        issue.completed = !issue.completed;
        this.displayIssues();
    },

    toggleAll: function () {
        var totalIssues = this.issues.length;
        var completedIssues = 0;
        // get the total completed issues
        for (var i = 0; i < totalIssues; i++) {
            if (this.issues[i].completed === true) {
                completedIssues++;
            }
        }
        // Case 1: if everything is true, make everything false
        if (totalIssues === completedIssues) {
            for (var i = 0; i < totalIssues; i++) {
                this.issues[i].completed = false;
            }
        }
        // Case 2: otherwise make everything true
        else {
            for (var i = 0; i < totalIssues; i++) {
                this.issues[i].completed = true;
            }
        }
        this.displayIssues();
    }
};

// var clickMe=document.getElementById('clickMe');
// clickMe.addEventListener('click',function(){
//     alert('Button Clicked');
// });

var handlers={
    displayIssues:function(){
        issueList.displayIssues();
    },
    toggleAll:function(){
        issueList.toggleAll();
    },
    addIssue:function(){
        var addIssueText=document.getElementById('addIssueText');
        issueList.addIssue(addIssueText.value);
        addIssueText.value='';
    },

    changeIssue:function(){
        var changeIssuePositionInput=document.getElementById('changeIssuePositionInput');
        var changeIssueTextInput=document.getElementById('changeIssueTextInput');
        issueList.changeIssue(changeIssuePositionInput.valueAsNumber,changeIssueTextInput.value);
        changeIssuePositionInput.value='';
        changeIssueTextInput.value='';
    } 

}

