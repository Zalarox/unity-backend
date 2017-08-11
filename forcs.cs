    name: type.string(),
    score: type.number(),
    gametype: type.string(),
    totalattempts: type.number(),
    created: type.date().default(r.now())


{
    String name = myname
    Int score = score
    Gametype = pass string '2d' or '3d'
}


{
    name
    score
}

IEnumerator Upload() {
    List<IMultipartFormSection> formData = new List<IMultipartFormSection>();
    formData.Add(new MultipartFormDataSection("name", "myname"));
    formData.Add(new MultipartFormFileSection("score", <dynamic score>));
    formData.Add(new MultipartFormFileSection("gametype", <hardcoded>));
    formData.Add(new MultipartFormFileSection("totalattempts", <computed there>));

    UnityWebRequest req = UnityWebRequest.Post("localhost:3000/api/", formData);
    req.SetRequestHeader("Content-Type", "application/json");
    req.method = "POST";

    yield return req.Send();

    if(req.isError) {
        Debug.Log(req.error);
    }
    else {
        Debug.Log("Form upload complete!");
    }
}