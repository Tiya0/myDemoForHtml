
// var columns = [    
//   // { label: '任务编号', key: 'colTaskNum', value: 'model.colTaskNum',required: true, show: true, type: 'text' },
//   // { label: '任务名称', key: 'colTaskName', value: 'model.colTaskName',required: true, show: true, type: 'text' },
//   // { label: '发布人', key: 'colPublisher', value: 'model.colPublisher',required: true, show: true, type: 'text', readonly:true },
//   // { label: '任务类型', key: 'coluqTaskTypeID', value: 'model.coluqTaskTypeID',required: true, show: true, type: 'select', list: { source: 'coluqTaskTypes', label: 'name', value: 'value' }, multiple: false },
//   // { label: '检测类型', key: 'coluqElementID', value: 'model.coluqElementID',required: true, show: true, type: 'select', list: { source: 'coluqElements', label: 'name', value: 'value' }, multiple: false },
//   // { label: '任务地址', key: 'colTaskAddress', value: 'model.colTaskAddress',required: true, show: true, type: 'text' },
//   // { label: '经度', key: 'colLongitude', value: 'model.colLongitude',required: true, show: true, type: 'number' },
//   // { label: '纬度', key: 'colLatitude', value: 'model.colLatitude',required: true, show: true, type: 'number' },
//   // { label: '任务概述', key: 'colTaskSummary', value: 'model.colTaskSummary',required: true, show: true, type: 'textarea' },
//   // { label: '承接单位类型', key: 'coluqOrganizationType', value: 'model.coluqOrganizationType',required: true, show: true, type: 'select', list: { source: 'coluqOrganizationTypes', label: 'name', value: 'value' }, multiple: false },
//   // { label: '承接单位', key: 'coluqOrganizationID', value: 'model.coluqOrganizationID',required: true, show: true, type: 'select', list: { source: 'coluqOrganizations', label: 'name', value: 'value' }, multiple: false },
//   // { label: '报告生成日期', key: 'colReportDate', value: 'model.colReportDate',required: true, show: true, type: 'datepicker' },

//     // { label: '单位编号', key: 'colOrganizationNum', value: 'model.colOrganizationNum', method: 'method($event)', placeholder: 'param1 text', required: true, show: true, readonly: false, type: 'text' },
//     // { label: '参数2', key: 'param2', value: 'model.param2', method: '', placeholder: 'param2 text', required: false, show: true, readonly: true, type: 'text' },
//     // { label: '参数3', key: 'param2', value: 'model.param3', method: '', placeholder: 'param2 text', required: false, show: false, readonly: true, type: 'text' },
//     // { label: '参数4', key: 'param2', value: 'model.param4', method: '', placeholder: 'param2 text', required: true, show: true, readonly: true, type: 'checkbox', disabled: true },
//     // { label: '水质', key: 'type0', value: 'checked', method: '', placeholder: 'param2 text', show: true, type: 'checkboxs', list: { source: 'list[0]', label: 'name', value: 'checked' }  },
//     // { label: '参数5', key: 'param2', value: 'model.param5', method: '', placeholder: 'param2 text', required: true, show: true, readonly: true, type: 'radio', list: { source: 'list', label: 'a', value: 'b' } },
//     // { label: '参数6', key: 'param2', value: 'value', method: '', placeholder: 'param2 text', required: true, show: true, readonly: true, type: 'select', list: { source: 'list', label: 'a', value: 'b' }, multiple: false },
//     // { label: '参数7', key: 'param2', value: 'values', method: '', placeholder: 'param2 text', required: true, show: true, readonly: true, type: 'select', list: { source: 'list', label: 'a', value: 'b' }, multiple: true },
//     // { label: '参数8', key: 'param2', value: 'values', method: 'method($event)', placeholder: 'param2 text', required: true, show: true, readonly: true, type: 'select', list: { source: 'list', label: 'a', value: 'b' }, multiple: true },
//     // { label: '参数9', key: 'param1', value: 'model.param1', method: 'method($event)', placeholder: 'param9 text', required: true, show: true, type: 'textarea' },
//     // { label: '参数10', key: 'param1', value: 'bsRangeValue', method: '', placeholder: '', required: true, show: true, type: 'datepickerrange' },
//     // { label: '参数11', key: 'param1', value: 'now', method: '', placeholder: '开始时间', required: true, show: true, type: 'datepicker' },
// ]

// computeInputs();
function computeInputs(columns) {
    var htmlStr = columns.reduce((total, current, index, arr) => total + computeInput(current, index, arr.length), '');
    console.log(htmlStr+"ok")
}
function computeInput(column, i, length) {
    let forRequired = (column.required == "true") ? true : false;
    let forDisabled = (column.disabled == "true") ? true : false;
    let forReadonly = (column.readonly == "true") ? true : false;
    let forMultiple = (column.multiple == "true") ? true : false;
    var pre = `<div class="form-group row">`
    var next = `</div>`
    var baseStr1 = '';
    switch (column.type) {
        case 'text':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                      ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                    </label>
                    <div class="col-sm-4">
                      <input 
                        type="${column.type}" 
                        name="${column.key}${i}" 
                        id="${column.key}${i}"
                        placeholder="${column.placeholder ? column.placeholder : ''}"
                        [(ngModel)]="${column.value ? column.value : 'model.' + column.key}" 
                        ${column.method ? "(ngModelChange)=\"" + column.method + "\"" : ""} 
                        ${forRequired ? "required" : ""} 
                        ${forDisabled ? "disabled" : ""} 
                        ${forReadonly ? "readonly" : ""} 
                        nbInput 
                        fullWidth >
                    </div>`
            break;
        case 'number':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                      ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                    </label>
                    <div class="col-sm-4">
                      <input 
                        type="${column.type}" 
                        name="${column.key}${i}" 
                        id="${column.key}${i}"
                        placeholder="${column.placeholder ? column.placeholder : ''}"
                        [(ngModel)]="${column.value ? column.value : 'model.' + column.key}" 
                        ${column.method ? "(ngModelChange)=\"" + column.method + "\"" : ""} 
                        ${forRequired ? "required" : ""} 
                        ${forDisabled ? "disabled" : ""} 
                        ${forReadonly ? "readonly" : ""} 
                        nbInput 
                        fullWidth >
                    </div>`
            break;
        case 'checkbox':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                        ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                      </label>
                      <div class="col-sm-4">
                        <div class="checkbox">
                          <nb-checkbox 
                            name="${column.key}${i}" 
                            id="${column.key}${i}"
                            [(ngModel)]="${column.value ? column.value : 'model.' + column.key}" 
                            ${forDisabled ? "disabled" : ""} 
                          >${column.label}</nb-checkbox>
                        </div>
                      </div>`
            break;
        case 'checkboxs':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                        ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                      </label>
                      <div class="col-sm-4">
                        <div class="checkbox">
                          <nb-checkbox 
                            *ngFor="let item of ${column.listSource};let j=index;" 
                            name="${column.key}${i}{{j}}" 
                            id="${column.key}${i}{{j}}"
                            [(ngModel)]="item['${column.listValue}']"
                          >{{item['${column.listLabel}']}}</nb-checkbox>
                        </div>
                      </div>`
            break;
        case 'radio':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                        ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                      </label>
                      <div class="col-sm-4">
                        <nb-radio-group 
                          name="${column.key}${i}" 
                          id="${column.key}${i}"
                          [(ngModel)]="${column.value ? column.value : 'model.' + column.key}"
                          ${forRequired ? "required" : ""} 
                          ${forDisabled ? "disabled" : ""} 
                          ${forReadonly ? "readonly" : ""} 
                        >
                          <nb-radio *ngFor="let item of ${column.listSource}" [value]="item['${column.listValue}']" class="d-inline">{{item['${column.listLabel}']}}</nb-radio>
                        </nb-radio-group>
                      </div>`
            break;
        case 'select':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                          ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                        </label>
                        <div class="col-sm-4">
                          <nb-select 
                            name="${column.key}${i}" 
                            id="${column.key}${i}"
                            [(ngModel)]="${column.value ? column.value : 'model.' + column.key}" 
                            ${forMultiple ? "multiple" : ""}
                            ${column.method ? "(ngModelChange)=\"" + column.method + "\"" : ""} 
                            ${forRequired ? "required" : ""} 
                            ${forDisabled ? "disabled" : ""} 
                            ${forReadonly ? "readonly" : ""} 
                          fullWidth >
                            <nb-option *ngFor="let item of ${column.listSource}" [value]="item['${column.listValue}']">{{item['${column.listLabel}']}}</nb-option>
                          </nb-select>
                        </div>`
            break;
        case 'textarea':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                      ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                    </label>
                    <div class="col-sm-4">
                      <textarea  
                        name="${column.key}${i}" 
                        id="${column.key}${i}"
                        placeholder="${column.placeholder ? column.placeholder : ''}"
                        [(ngModel)]="${column.value ? column.value : 'model.' + column.key}" 
                        ${column.method ? "(ngModelChange)=\"" + column.method + "\"" : ""} 
                        ${forRequired ? "required" : ""} 
                        ${forDisabled ? "disabled" : ""} 
                        ${forReadonly ? "readonly" : ""} 
                        nbInput fullWidth rows="5">
                      </textarea>
                    </div>`
            break;
        case 'datepickerrange':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                      ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                    </label>
                    <div class="col-sm-4">
                      <input
                        class="form-control"
                        name="${column.key}${i}" 
                        id="${column.key}${i}"
                        placeholder="${column.placeholder ? column.placeholder : '时间筛选'}"
                        #drp="bsDaterangepicker" bsDaterangepicker
                        [bsConfig]="{ dateInputFormat: 'YYYY-MM-DD' , containerClass: 'historydaterange theme-green'}"
                        [(ngModel)]="${column.value}"
                        ${forRequired ? "required" : ""} 
                        ${forDisabled ? "disabled" : ""}
                        ${column.method ? "(ngModelChange)=\"" + column.method + "\"" : "(ngModelChange)=changeParams(dp)"} >
                      </div>`
            break;
        case 'datepicker':
            baseStr1 = `<label for="" class="label col-sm-2 col-form-label text-right">
                        ${forRequired ? "<span class=\"d-inline-block text-center\" [ngStyle]=\"{width: \'20px\'}\"><code>*</code></span>" : ''}${column.label}
                      </label>
                      <div class="col-sm-4">
                        <input
                          class="form-control"
                          name="${column.key}${i}" 
                          id="${column.key}${i}"
                          placeholder="${column.placeholder ? column.placeholder : ''}"
                          #${column.key}${i}="bsDatepicker" bsDatepicker
                          [bsConfig]="{ dateInputFormat: 'YYYY-MM-DD' , containerClass: 'historydaterange theme-green'}"
                          [(ngModel)]="${column.value}"
                          ${forRequired ? "required" : ""} 
                          ${forDisabled ? "disabled" : ""}
                          ${column.method ? "(ngModelChange)=\"" + column.method + "\"" : ""} >
                        </div>`
            break;
        default:
            break;
    }
    if (i % 2 == 0 && i != length - 1) {
        return `${pre}
        ${baseStr1}`
    } else if (i % 2 == 0 && i == length - 1) {
        return `${pre}
        ${baseStr1}
        ${next}`
    } else {
        return `${baseStr1}
        ${next}`
    }
}