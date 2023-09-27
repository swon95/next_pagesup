import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Edit: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState("");

    // 기존의 제목 가져오기
    useEffect(() => {
        if (id) {
            axios
                .get(`/api/notice/read/`, { params: { id } })
                .then((response) => {
                    // console.log("title: ", response.data);
                    setTitle(response.data.title);
                })
                .catch((error) => {
                    console.error(
                        "There was an error fetching the post!",
                        error
                    );
                });
        }
    }, [id]);

    return (
        <Container>
            <div>
                <h1 className="text-3xl font-bold">수정 페이지</h1>
                <p className="text-lg mb-4">{`게시물 ID: ${id}`}</p>
                <div className="m-auto w-4/5 p-4 bg-white rounded-md border border-[#222222] flex flex-col space-y-4">
                    <textarea
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-3xl font-semibold placeholder-[#222222] focus:outline-none focus:border-none whitespace-normal overflow-wrap-break-word resize-none"
                        placeholder="제목"
                        rows="4"
                    />
                    <div className="min-h-[500px]">
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={(editor) => {
                                console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                                console.log("Blur.", editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log("Focus.", editor);
                            }}
                        />
                    </div>
                </div>
                <button className="w-[200px] h-12 text-lg bg-indianred rounded mt-10 focus:outline-none">
                    입력
                </button>
            </div>
        </Container>
    );
};

export default Edit;
