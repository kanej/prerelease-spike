# A spike to test changeset publishing

We want to do prereslease publishing of changesets. This is a spike to test the idea.

The packages have a dep graph:

```mermaid
flowchart LR
  a --> b
  a --> c
  b --> d
  c --> d
```