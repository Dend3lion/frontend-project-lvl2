export const stylishResult = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

export const plainResult = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

export const jsonResult = `[{"key":"common","children":[{"key":"follow","newValue":false,"type":"added"},{"key":"setting1","oldValue":"Value 1","type":"unchanged"},{"key":"setting2","oldValue":200,"type":"deleted"},{"key":"setting3","oldValue":true,"newValue":null,"type":"changed"},{"key":"setting4","newValue":"blah blah","type":"added"},{"key":"setting5","newValue":{"key5":"value5"},"type":"added"},{"key":"setting6","children":[{"key":"doge","children":[{"key":"wow","oldValue":"","newValue":"so much","type":"changed"}],"type":"nested"},{"key":"key","oldValue":"value","type":"unchanged"},{"key":"ops","newValue":"vops","type":"added"}],"type":"nested"}],"type":"nested"},{"key":"group1","children":[{"key":"baz","oldValue":"bas","newValue":"bars","type":"changed"},{"key":"foo","oldValue":"bar","type":"unchanged"},{"key":"nest","oldValue":{"key":"value"},"newValue":"str","type":"changed"}],"type":"nested"},{"key":"group2","oldValue":{"abc":12345,"deep":{"id":45}},"type":"deleted"},{"key":"group3","newValue":{"deep":{"id":{"number":45}},"fee":100500},"type":"added"}]`;
