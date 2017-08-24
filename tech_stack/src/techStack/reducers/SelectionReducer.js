/**
 * Created Date: Thursday, August 24th 2017, 11:40:50 am
 * Author: Julien Saito
 * -----
 * Last Modified: Thu Aug 24 2017
 * Modified By: Julien Saito
 * -----
 * The purpose of this file is to keep track of what section the user has selected
 * -----
 * Copyright (c) 2017 CoInspect
 * ------------------------------------
 */

//state is the last state the action was executed on.
//make sure to add '= null' so that the default return state is not "undefined"
export default (state = null, action) => {
    console.log("received action " + action.type);
    switch (action.type) {
        case 'select_library':
            console.log("select_library " + action.libraryId);
            return action.libraryId; // defined as selectedLibraryId in index.js
        default:
            return state;
    }
};