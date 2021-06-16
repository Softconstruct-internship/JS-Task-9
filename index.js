const body = document.body;
function getHtmlElement(tagName, parent, className) {
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    parent.append(htmlElement);
    return htmlElement;

}
const main = getHtmlElement("main", body, "main_container");
const containerTable = getHtmlElement("div", main, "containerTable");

const URL = "http://localhost:3000/photo";
const putButton = getHtmlElement("button", containerTable, "putButton");
putButton.textContent = "PUT";

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(({ ...element }) => {
            const id = element.id;
            const title = element.title;
            const albumId = element.albumId;

            const container = document.createElement("div");
            container.className = "container";

            const containerParagraphId = document.createElement("span");
            containerParagraphId.textContent = id;
            containerParagraphId.className = "id";

            const deleteButton = document.createElement("button");
            deleteButton.dataset.deleteButtonElementId = id;
            deleteButton.className = "button";
            deleteButton.textContent = "DELETE";
            deleteButton.addEventListener("click", async (event) => {
                const id = event.target.dataset.deleteButtonElementId;
                const res = await fetch(`${URL}/${id}`, {
                    method: 'DELETE'
                });
            });

            container.append(deleteButton);

            container.append(containerParagraphId);

            const containerParagraphName = document.createElement("span");
            containerParagraphName.textContent = title;
            containerParagraphName.className = "name";

            container.append(containerParagraphName);

            const containerParagrafEmail = document.createElement("span");
            containerParagrafEmail.className = "email"
            containerParagrafEmail.textContent = albumId;
            container.append(containerParagrafEmail);

            containerTable.append(container);
        });
    });



