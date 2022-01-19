#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.
FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
 && apt-get install -y --no-install-recommends nodejs \
 && echo "node version: $(node --version)" \
 && echo "npm version: $(npm --version)" \
 && rm -rf /var/lib/apt/lists/*

COPY . .
RUN dotnet restore -nowarn:msb3202,nu1503 -p:RestoreUseSkipNonexistentTargets=false

WORKDIR /app/ClientApp
RUN npm cache clean --force
RUN npm install && npm run build
RUN dotnet publish -c release -o /out --no-restore

#FROM build AS publish
#RUN dotnet publish "Hospital.csproj" -c Release -o /app/publish
#
FROM base AS final
WORKDIR /app
COPY --from=build /out .
ENTRYPOINT ["dotnet", "Hospital.dll"]
