# diff action

## Concept

```yaml
  - name: Different2
    id: diff
    uses: ./
    with:
      first: '{"foo": "bar", "zoo": 1}'
      second: '{"foo": "zoo", "zoo": 2}'

  - name: Output
    run:
      echo "Different: ${{ steps.diff.outputs.diff}}"


```