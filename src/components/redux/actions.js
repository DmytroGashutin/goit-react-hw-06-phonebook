import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction('contact/change_filter');
const contactAdd = createAction('contact/add');
const contactDelete = createAction('contact/delete');


const actionsExportObj = {
    changeFilter,
    contactAdd,
    contactDelete
}
export default actionsExportObj;