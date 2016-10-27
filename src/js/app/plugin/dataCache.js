/**
 * Created by duanning on 2016/9/21.
 */
define(function () {
    var userPhoneCache = {},
        userActionCacheCancel = [],
        userActionCacheBack = [];
    function userAction(htmlData) {
        this.htmlData = htmlData || '';
    }
    userPhoneCache = {
        'catchPush':function () {
            var action = new userAction($(".edit_wrapper").html());
            userActionCacheCancel .push(action);
        },
        'clear':function () {
            userActionCacheCancel = [];
            userActionCacheBack = [];
        },
        'Cancel':function () {
            if(userActionCacheCancel.length>1){
                var now = userActionCacheCancel.pop(),
                    last = userActionCacheCancel[userActionCacheCancel.length-1];
                userActionCacheBack.push(now);
                return [last, userActionCacheCancel.length];
            }
        },
        'Back':function () {
            if(userActionCacheBack.length>0){
                var now = userActionCacheBack.pop();
                userActionCacheCancel.push(now);
                return now;
            }
        },
        'getCancel':function () {
            return userActionCacheCancel[userActionCacheCancel.length - 1];
        },
        'getCancelLength':function () {
            return userActionCacheCancel.length;
        },
        'getBackLength':function () {
            return userActionCacheBack.length;
        },
        'testCatchPush':function () {
            var action = new userAction($(".demo .edit_wrapper").html());
            userActionCacheCancel .push(action);
        }
    }
    return userPhoneCache;
})