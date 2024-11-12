# AzureResume
My own Azure resume, following [ACG project video](https://learn.acloud.guru/series/acg-projects/view/403).

<img src="https://imgur.com/Kd3yFgI.png" height="80%" width="80%" alt="Architechture"/>


## Prerequisites needed for this project.

- [Visual Studio Code](https://code.visualstudio.com/)
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash)
- [Visual Studio Code Extension: Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
- [NuGet Microsoft.Azure.WebJobs.Extensions.CosmosDB](https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.CosmosDB#dotnet-cli)
- [Visual Studio Code Extension: Azure Storage](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestorage)

## Structure

- `frontend/`: Folder contains the website.
    - `main.js`: Folder contains visitor counter code.
- `api/`: Folder contains the dotnet API deployed on Azure Functions.
    - `Counter.cs`: Contains the visitor counter code.
- `.github/workflows/`: Folder contains CI/CD workflow configurations.
- `.devcontainer`: Folder contains the my container configuration for VS Code.

## First Steps
- Created Repository in Github
- Set up SSH key in Github
- Clone repository

## Second Steps
- Created Azure Resource Group in Azure portal.
- Created Azure CosmosDB in Azure portal.
- Created Database and Container in CosmosDB
- Created Azure Function locally via CLI.
- Deployed local Azure Function to Azure for production via Visual Studio Code Extension: Azure Functions.

## Third Steps
- The frontend folder was deployed to Azure Blob Storage via Visual Studio Code Extension: Azure Storage.
- Updated CORS setting on Azure function to reflect URL of Azure Blog Storage.
- Seeing as I was using a free tier Azure account I was unable to set up front door/ CDN however I improvised by modifying my GitHub Actions workflow to skip the CDN purge
 step and instead, upload the files directly to the Azure Storage account that serves my static website.

## Fourth Steps
- Setup CI/CD pipeline
- Created GitHub workflows for backend and frontend
  
## Azure Technologies being used
- Azure CosmosDB
- Azure Functions
- Azure Storage
- Azure CDN (not used but you can use it if you're on a pay-as-you-go Azure plan)
