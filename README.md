## HLD

```mermaid
graph LR
    %% Define Nodes
    User[User]
    FE[Nginx]
    MID[Nodejs]
    BE[Mongodb]
    BEUI[Mongo Express]

    %% Define Connnections with Ports
    User -->|3000| FE
    User -->|8081| BEUI
    FE -->|5000| MID
    MID -->|27017| BE
    BEUI -->|27017| BE

    %% Styling
    stlye User fill:blue, stroke:black,stroke-width:2px
    style FE fill:#bbf,stroke:#33f,stroke-width:2px
    style MID fill:#fbf,stroke:#f3f,stroke-width:2px
    style BE fill:#fbb,stroke:#f33,stroke-width:2px
    