import PlaceAutofill from './PlaceAutofill';
import PlaceAutocompleteField from './PlaceAutocompleteField';
import PlaceAutocompleteList from './PlaceAutocompleteList';
import PlaceAutocompleteListItem from './PlaceAutocompleteListItem';
import mergeClasses from 'vue-interface/src/Plugins/MergeClasses';

export {
    PlaceAutocompleteField,
    PlaceAutocompleteList,
    PlaceAutocompleteListItem
}

function install(vue, options) {
    Vue.use(mergeClasses);
    Vue.directive('place-autofill', PlaceAutofill);
    Vue.component('place-autocomplete-field', PlaceAutocompleteField);
    Vue.component('place-autocomplete-list', PlaceAutocompleteList);
    Vue.component('place-autocomplete-list-item', PlaceAutocompleteListItem);
}

if(window && window.Vue) {
    window.Vue.use(install);
}

export default install;