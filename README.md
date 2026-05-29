## System Architecture Diagram

```mermaid
graph LR
    %% Define Nodes
    FE[Front-End<br>Client / UI]
    MID[Mid-Tier<br>API Gateway / Router]
    BE[Back-End<br>Core Services / DB]

    %% Define Connections with Ports
    FE -->|HTTPS / Port 443| MID
    MID -->|TCP / Port 8080| BE
    BE -->|SQL / Port 5432| MID

    %% Styling
    style FE fill:#bbf,stroke:#33f,stroke-width:2px
    style MID fill:#fbf,stroke:#f3f,stroke-width:2px
    style BE fill:#fbb,stroke:#f33,stroke-width:2px