# Overview
This exercise is to understand the build and flow of a full stack app.
We will enter data in the frontend and view that data in the backend.

## HLD

```mermaid
graph LR
    %% Define Nodes
    USER[User]
    FE[Nginx]
    MID[Nodejs]
    BE[Mongodb]
    BEUI[Mongo Express]

    %% Define Connnections with Ports
    USER -->|3000| FE
    USER -->|8081| BEUI
    FE -->|5000| MID
    MID -->|27017| BE
    BEUI -->|27017| BE

    %% Styling
    style USER fill:#blue,stroke:#black,stroke-width:2px
    style FE fill:#blue,stroke:#black,stroke-width:2px
    style MID fill:#blue,stroke:#black,stroke-width:2px
    style BE fill:#blue,stroke:#black,stroke-width:2px
```

# Setup procedure
 
1. Run docker-compose.yml file \
`docker compose up -d` \
If '-d' is omitted, then all containers stop when exiting the terminal view.
2. From browser enter username/password \
`localhost:3000/login.html`
3. Open another tab with localhost:8081 to view data in mongodb \
`username:admin, password: pass`
4. Stop with:
`docker compose down`

### Built docker images are uploaded into [Docker Hub](https://hub.docker.com/repositories/webuser21)
### Versions of the images used are mentioned in the Dockerfile