import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

import ENV from 'ember-todo/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api/v1',
  host: ENV.apiURL,
  authorizer: 'authorizer:token'
});
