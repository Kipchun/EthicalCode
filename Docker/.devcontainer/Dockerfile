FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install common tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    build-essential \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Install code-server so VS Code can be accessed in a browser on port 8080
RUN curl -fsSL https://code-server.dev/install.sh | sh

RUN mkdir -p /workspace && chown vscode:vscode /workspace
WORKDIR /workspace

EXPOSE 8080

USER vscode
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "--disable-telemetry", "--disable-update-check", "."]