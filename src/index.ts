//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { createdBy } from '$utils/createdBy';

// console.log = function () {};

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  // modal();

  linkblockedit();
  swipers();
  createdBy();
});
