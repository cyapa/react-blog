import _ from "lodash";

type TransformCase = (string?: string) => string;

//TODO: Replace any with a proper typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JSONObject = any;

const _mapKeys = (
  object: JSONObject,
  transformCase: TransformCase
): JSONObject => {
  if (_.isArray(object)) {
    return object.map((item) => _mapKeys(item, transformCase));
  }
  if (_.isPlainObject(object)) {
    return _.transform(
      object,
      (
        acc: { [index: string]: JSONObject },
        value: JSONObject,
        key: string
      ) => {
        acc[transformCase(key)] = _mapKeys(value, transformCase);
      }
    );
  }
  return object;
};

export const toSnakeCaseKeys = (object: JSONObject): JSONObject =>
  _mapKeys(object, _.snakeCase);
