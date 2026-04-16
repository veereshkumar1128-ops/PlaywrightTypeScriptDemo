# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter4\04_Reports_Test.spec.ts >> regression >> Test 4 - Annotations Test
- Location: tests\chapter4\04_Reports_Test.spec.ts:46:8

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Playwright by Testers Talk' }).first()
    - waiting for" https://www.google.com/search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&source=hp&ei=Tg_eaY74PImcseMPl_OmyAQ&iflsig=AFdpzrgAAAAAad4dX7_zFEV9j8JjIKXDV_w8u7f2uNOz&ved=0ahUKEwiO19zoie2TAxUJT…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bby%2Btesters%2Btalk%26sca_esv%3D829b6725c1213f11%26source%3Dhp%26ei%3DTg_eaY74PImcseMPl_OmyAQ%26iflsig%3DA…"
    - waiting for" https://www.google.com/search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&source=hp&ei=Tg_eaY74PImcseMPl_OmyAQ&iflsig=AFdpzrgAAAAAad4dX7_zFEV9j8JjIKXDV_w8u7f2uNOz&ved=0ahUKEwiO19zoie2TAxUJT…" navigation to finish...

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic:
      - link "Skip to main content" [ref=e2] [cursor=pointer]
      - link "Accessibility help" [ref=e3] [cursor=pointer]:
        - /url: https://support.google.com/websearch/answer/181196?hl=en-IN
      - link "Accessibility feedback" [ref=e4] [cursor=pointer]
  - generic [ref=e9]:
    - search [ref=e10]:
      - generic [ref=e12]:
        - link "Go to Google Home" [ref=e14] [cursor=pointer]:
          - /url: https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjXm_Huie2TAxXgnisGHft8CuYQPAgJ
          - img [ref=e15]
        - generic [ref=e22]:
          - generic [ref=e23]:
            - combobox "Search" [ref=e26]: playwright by testers talk playwright by testers talk
            - generic [ref=e27]:
              - button "Clear" [ref=e29] [cursor=pointer]:
                - img [ref=e31]
              - generic [ref=e34]:
                - button "Search by voice" [ref=e35] [cursor=pointer]:
                  - img [ref=e36]
                - button "Search by image" [ref=e38] [cursor=pointer]:
                  - img [ref=e39]
          - button "Search" [ref=e41] [cursor=pointer]:
            - img [ref=e44]
    - generic [ref=e46]:
      - button "Settings" [ref=e48] [cursor=pointer]
      - generic [ref=e49]:
        - button "Google apps" [ref=e51] [cursor=pointer]:
          - img [ref=e52]
        - link "Sign in" [ref=e56] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/search%3Fq%3Dplaywright%2Bby%2Btesters%2Btalk%26sca_esv%3D829b6725c1213f11%26source%3Dhp%26ei%3DTg_eaY74PImcseMPl_OmyAQ%26iflsig%3DAFdpzrgAAAAAad4dX7_zFEV9j8JjIKXDV_w8u7f2uNOz%26ved%3D0ahUKEwiO19zoie2TAxUJTmwGHZe5CUkQ4dUDCBY%26uact%3D5%26oq%3Dplaywright%2Bby%2Btesters%2Btalk%26gs_lp%3DEgdnd3Mtd2l6IhpwbGF5d3JpZ2h0IGJ5IHRlc3RlcnMgdGFsa0hEUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE%26sclient%3Dgws-wiz%26sei%3DUQ_eaYPSAvza1sQP1sftgQw&ec=futura_srp_og_si_72236_p
  - generic [ref=e58]:
    - navigation [ref=e64]:
      - list [ref=e69]:
        - listitem [ref=e70]:
          - link "AI Mode" [ref=e73] [cursor=pointer]:
            - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&udm=50&source=hp&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpmAsnXCN5UBx17opt8eaTX5ijYCyJdSZFM4mewRGuivbKirXDuh5UVpdpaw-YxGq0aFW8FJx7QFgKAu9Mp8JGui5wyswVm9VUGkWCgmf6W3OV72EBVZ05PW-_XgCmtjeMVjPqckNVp0QMbtTfLOtkUNKakcC-kQOrWtPHdLPzKW-W2pSNG_jUAzklZumd49jFuSeOfQ&aep=1&ntc=1&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ2J8OegQIEBAE
            - generic [ref=e76]: AI Mode
        - listitem [ref=e77]:
          - link "All" [disabled] [ref=e78]:
            - generic [ref=e80]: All
        - listitem [ref=e81]:
          - link "Videos" [ref=e82] [cursor=pointer]:
            - /url: /search?sca_esv=829b6725c1213f11&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpmAsnXCN5UBx17opt8eaTX5ijYCyJdSZFM4mewRGuivbKirXDuh5UVpdpaw-YxGq0aFW8FJx7QFgKAu9Mp8JGui5wyswVm9VUGkWCgmf6W3OV72EBVZ05PW-_XgCmtjeMVjPqckNVp0QMbtTfLOtkUNKakcC-kQOrWtPHdLPzKW-W2pSNG_jUAzklZumd49jFuSeOfQ&q=playwright+by+testers+talk&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQtKgLegQIFBAB
            - generic [ref=e84]: Videos
        - listitem [ref=e85]:
          - link "Images" [ref=e86] [cursor=pointer]:
            - /url: /search?sca_esv=829b6725c1213f11&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpmAsnXCN5UBx17opt8eaTX5ijYCyJdSZFM4mewRGuivbKirXDuh5UVpdpaw-YxGq0aFW8FJx7QFgKAu9Mp8JGui5wyswVm9VUGkWCgmf6W3OV72EBVZ05PW-_XgCmtjeMVjPqckNVp0QMbtTfLOtkUNKakcC-kQOrWtPHdLPzKW-W2pSNG_jUAzklZumd49jFuSeOfQ&q=playwright+by+testers+talk&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQtKgLegQIFhAB
            - generic [ref=e88]: Images
        - listitem [ref=e89]:
          - link "Short videos" [ref=e90] [cursor=pointer]:
            - /url: /search?sca_esv=829b6725c1213f11&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpmAsnXCN5UBx17opt8eaTX5ijYCyJdSZFM4mewRGuivbKirXDuh5UVpdpaw-YxGq0aFW8FJx7QFgKAu9Mp8JGui5wyswVm9VUGkWCgmf6W3OV72EBVZ05PW-_XgCmtjeMVjPqckNVp0QMbtTfLOtkUNKakcC-kQOrWtPHdLPzKW-W2pSNG_jUAzklZumd49jFuSeOfQ&q=playwright+by+testers+talk&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQs6gLegQIFRAB
            - generic [ref=e92]: Short videos
        - listitem [ref=e93]:
          - link "Forums" [ref=e94] [cursor=pointer]:
            - /url: /search?sca_esv=829b6725c1213f11&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpmAsnXCN5UBx17opt8eaTX5ijYCyJdSZFM4mewRGuivbKirXDuh5UVpdpaw-YxGq0aFW8FJx7QFgKAu9Mp8JGui5wyswVm9VUGkWCgmf6W3OV72EBVZ05PW-_XgCmtjeMVjPqckNVp0QMbtTfLOtkUNKakcC-kQOrWtPHdLPzKW-W2pSNG_jUAzklZumd49jFuSeOfQ&q=playwright+by+testers+talk&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQs6gLegQIExAB
            - generic [ref=e96]: Forums
        - listitem [ref=e97]:
          - link "Shopping" [ref=e98] [cursor=pointer]:
            - /url: /search?sca_esv=829b6725c1213f11&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpmAsnXCN5UBx17opt8eaTX5ijYCyJdSZFM4mewRGuivbKirXDuh5UVpdpaw-YxGq0aFW8FJx7QFgKAu9Mp8JGui5wyswVm9VUGkWCgmf6W3OV72EBVZ05PW-_XgCmtjeMVjPqckNVp0QMbtTfLOtkUNKakcC-kQOrWtPHdLPzKW-W2pSNG_jUAzklZumd49jFuSeOfQ&q=playwright+by+testers+talk&ved=1t:220175&ictx=111
            - generic [ref=e100]: Shopping
        - listitem [ref=e101]:
          - button "More filters" [ref=e102] [cursor=pointer]:
            - generic "More filters" [ref=e103]:
              - generic [ref=e104]:
                - generic [ref=e105]: More
                - img [ref=e107]
    - heading "Search Results" [level=1] [ref=e109]
    - generic [ref=e114]:
      - generic [ref=e133]:
        - heading "Thinking" [level=2] [ref=e137]:
          - generic [ref=e138]: Thinking
        - progressbar [ref=e139]
      - main [ref=e141]:
        - generic [ref=e145]:
          - generic [ref=e148]:
            - heading "Web results" [level=2] [ref=e149]
            - generic [ref=e150]:
              - generic [ref=e153]:
                - link "Playwright by Testers Talk YouTube · Testers Talk 29.2K+ followers" [ref=e155] [cursor=pointer]:
                  - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM
                  - heading "Playwright by Testers Talk" [level=3] [ref=e156]
                  - generic [ref=e161]:
                    - generic [ref=e163]: YouTube · Testers Talk
                    - generic [ref=e165]: 29.2K+ followers
                - button "About this result" [ref=e166] [cursor=pointer]:
                  - img [ref=e169]
              - generic [ref=e172]:
                - generic [ref=e173]:
                  - emphasis [ref=e174]: Playwright tutorial
                  - text: ", playwright automation, playwright automation tutorial, playwright vs cypress, playwright vs selenium, playwright with javascript, ..."
                - link "Read more" [ref=e175] [cursor=pointer]:
                  - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM#:~:text=Play%20all
              - link "playwright by testers talk from www.youtube.com" [ref=e178] [cursor=pointer]:
                - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM
                - img "playwright by testers talk from www.youtube.com" [ref=e180]
          - generic [ref=e187]:
            - generic [ref=e190]:
              - link "#1 Playwright Tutorial Full Course 2026 | Playwright Testing ... YouTube · Testers Talk 1.5L+ views · 2 years ago" [ref=e192] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=2poXBtifpzA
                - heading "#1 Playwright Tutorial Full Course 2026 | Playwright Testing ..." [level=3] [ref=e193]
                - generic [ref=e198]:
                  - generic [ref=e200]: YouTube · Testers Talk
                  - generic [ref=e202]: 1.5L+ views · 2 years ago
              - button "About this result" [ref=e203] [cursor=pointer]:
                - img [ref=e206]
            - generic [ref=e208]:
              - button "#1 Playwright Tutorial Full Course 2026 | Playwright Testing ... by Testers Talk on YouTube. Play on Google. 6:55:08" [ref=e209] [cursor=pointer]:
                - generic [ref=e211]:
                  - img [ref=e216]
                  - generic [ref=e219]:
                    - generic [ref=e220]: 6:55:08
                    - img [ref=e223]
              - generic [ref=e226]: Playright is an open source automation testing tool which is used to perform the end to end testing of modern web applications.
            - button "25 key moments in this video" [ref=e231] [cursor=pointer]:
              - generic [ref=e234]:
                - generic [ref=e237]: 25 key moments in this video
                - img [ref=e239]
          - generic [ref=e247]:
            - generic [ref=e250]:
              - link "#1 Playwright Automation Using TypeScript Full Course 2026 ... YouTube · Testers Talk 1.5L+ views · 1 year ago" [ref=e252] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=788GvvcfwTY
                - heading "#1 Playwright Automation Using TypeScript Full Course 2026 ..." [level=3] [ref=e253]
                - generic [ref=e258]:
                  - generic [ref=e260]: YouTube · Testers Talk
                  - generic [ref=e262]: 1.5L+ views · 1 year ago
              - button "About this result" [ref=e263] [cursor=pointer]:
                - img [ref=e266]
            - generic [ref=e268]:
              - button "#1 Playwright Automation Using TypeScript Full Course 2026 ... by Testers Talk on YouTube. Play on Google. 8:55:10" [ref=e269] [cursor=pointer]:
                - generic [ref=e271]:
                  - img [ref=e276]
                  - generic [ref=e279]:
                    - generic [ref=e280]: 8:55:10
                    - img [ref=e283]
              - generic [ref=e286]: In this course you will learn how to set up play rate with typescript test automation environment from scratch to the advanced level.
            - button "25 key moments in this video" [ref=e291] [cursor=pointer]:
              - generic [ref=e294]:
                - generic [ref=e297]: 25 key moments in this video
                - img [ref=e299]
          - generic [ref=e307]:
            - generic [ref=e310]:
              - 'link "Playwright TypeScript #3 Chapter01 Introduction | Playwright ... YouTube · Testers Talk 1.7K+ views · 1 year ago" [ref=e312] [cursor=pointer]':
                - /url: https://www.youtube.com/watch?v=2BTgHb1Pybg
                - 'heading "Playwright TypeScript #3 Chapter01 Introduction | Playwright ..." [level=3] [ref=e313]'
                - generic [ref=e318]:
                  - generic [ref=e320]: YouTube · Testers Talk
                  - generic [ref=e322]: 1.7K+ views · 1 year ago
              - button "About this result" [ref=e323] [cursor=pointer]:
                - img [ref=e326]
            - generic [ref=e328]:
              - 'button "Playwright TypeScript #3 Chapter01 Introduction | Playwright ... by Testers Talk on YouTube. Play on Google. 0:53" [ref=e329] [cursor=pointer]':
                - generic [ref=e331]:
                  - img [ref=e336]
                  - generic [ref=e339]:
                    - generic [ref=e340]: 0:53
                    - img [ref=e343]
              - generic [ref=e346]: In this chapter one you will be learning what is playright architecture of play rate and what is the difference between playrate Cypress and selenium.
          - generic [ref=e350]:
            - generic [ref=e353]:
              - link "Testers Talk YouTube · Testers Talk 29.2K+ followers" [ref=e355] [cursor=pointer]:
                - /url: https://www.youtube.com/@testerstalk
                - heading "Testers Talk" [level=3] [ref=e356]
                - generic [ref=e361]:
                  - generic [ref=e363]: YouTube · Testers Talk
                  - generic [ref=e365]: 29.2K+ followers
              - button "About this result" [ref=e366] [cursor=pointer]:
                - img [ref=e369]
            - generic [ref=e372]:
              - generic [ref=e373]:
                - text: Full Course Tutorials ·
                - emphasis [ref=e374]: Playwright TypeScript by Testers Talk
                - text: ✓ · Playwright JavaScript by Testers Talk☑️ · Playwright API Testing by Testers Talk☑️.
              - link "Read more" [ref=e375] [cursor=pointer]:
                - /url: https://www.youtube.com/@testerstalk#:~:text=Full%20Course%20Tutorials&text=Playwright%20TypeScript%20by%20Testers%20Talk,%E2%9C%85&text=Playwright%20JavaScript%20by%20Testers%20Talk%E2%98%91%EF%B8%8F&text=Playwright%20API%20Testing%20by%20Testers,Talk%E2%98%91%EF%B8%8F
          - generic [ref=e379]:
            - generic [ref=e382]:
              - link "Testers Talk Medium · Testers Talk 310+ followers" [ref=e384] [cursor=pointer]:
                - /url: https://medium.com/@testerstalk
                - heading "Testers Talk" [level=3] [ref=e385]
                - generic [ref=e390]:
                  - generic [ref=e392]: Medium · Testers Talk
                  - generic [ref=e394]: 310+ followers
              - button "About this result" [ref=e395] [cursor=pointer]:
                - img [ref=e398]
            - generic [ref=e402]:
              - text: "Read writing from Testers Talk on Medium. Become Best Tester: Software Testing,"
              - emphasis [ref=e403]: Playwright
              - text: ", Cypress, Selenium, Postman, Rest Assured, API Testing, ..."
          - generic [ref=e407]:
            - generic [ref=e410]:
              - link "Playwright TypeScript Full Course by Testers Talk | PDF Scribd https://www.scribd.com › document › Playwright-Type..." [ref=e412] [cursor=pointer]:
                - /url: https://www.scribd.com/document/861225550/Playwright-TypeScript-Full-Course-by-Testers-Talk
                - heading "Playwright TypeScript Full Course by Testers Talk | PDF" [level=3] [ref=e413]
                - generic [ref=e418]:
                  - generic [ref=e420]: Scribd
                  - generic [ref=e422]: https://www.scribd.com › document › Playwright-Type...
              - button "About this result" [ref=e423] [cursor=pointer]:
                - img [ref=e426]
            - generic [ref=e429]:
              - generic [ref=e430]:
                - text: The document outlines a comprehensive course on
                - emphasis [ref=e431]: using Playwright with TypeScript
                - text: ", covering installation, setup, and various testing techniques."
              - link "Read more" [ref=e432] [cursor=pointer]:
                - /url: https://www.scribd.com/document/861225550/Playwright-TypeScript-Full-Course-by-Testers-Talk#:~:text=The%20document%20outlines%20a%20comprehensive,setup%2C%20and%20various%20testing%20techniques.
            - img "Rated 5.0 out of 5, (2) user reviews" [ref=e437]:
              - text: "5.0"
              - img [ref=e438]
              - text: (2)
          - generic [ref=e444]:
            - generic [ref=e447]:
              - link "Testers Talk BakkappaN GitHub https://github.com › BakkappaN" [ref=e449] [cursor=pointer]:
                - /url: https://github.com/BakkappaN
                - heading "Testers Talk BakkappaN" [level=3] [ref=e450]
                - generic [ref=e455]:
                  - generic [ref=e457]: GitHub
                  - generic [ref=e459]: https://github.com › BakkappaN
              - button "About this result" [ref=e460] [cursor=pointer]:
                - img [ref=e463]
            - generic [ref=e466]:
              - generic [ref=e467]:
                - text: In this
                - emphasis [ref=e468]: Playwright with TypeScript Tutorial Full Course
                - text: covered topics from basics to advance level. Playwright with TypeScript Full Course - https://youtube.
              - link "Read more" [ref=e469] [cursor=pointer]:
                - /url: https://github.com/BakkappaN#:~:text=In%20this%20Playwright%20with%20TypeScript,TypeScript%20Full%20Course%20%2D%20https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUeDIlio4THEXmQxNvKm%E2%80%A6
          - generic [ref=e476]:
            - generic [ref=e479]:
              - link "#2 Advanced Playwright TypeScript Tutorial Full Course 2025 ... YouTube · Testers Talk 17.7K+ views · 1 year ago" [ref=e481] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=YfRazDhi9Fw
                - heading "#2 Advanced Playwright TypeScript Tutorial Full Course 2025 ..." [level=3] [ref=e482]
                - generic [ref=e487]:
                  - generic [ref=e489]: YouTube · Testers Talk
                  - generic [ref=e491]: 17.7K+ views · 1 year ago
              - button "About this result" [ref=e492] [cursor=pointer]:
                - img [ref=e495]
            - generic [ref=e497]:
              - button "#2 Advanced Playwright TypeScript Tutorial Full Course 2025 ... by Testers Talk on YouTube. Play on Google. 2:22:14" [ref=e498] [cursor=pointer]:
                - generic [ref=e500]:
                  - img [ref=e505]
                  - generic [ref=e508]:
                    - generic [ref=e509]: 2:22:14
                    - img [ref=e512]
              - generic [ref=e515]: In this play rate video I will talk about how to perform data driven testing in playright with typescript by using the Json file.
            - button "13 key moments in this video" [ref=e520] [cursor=pointer]:
              - generic [ref=e523]:
                - generic [ref=e526]: 13 key moments in this video
                - img [ref=e528]
          - generic [ref=e536]:
            - generic [ref=e539]:
              - link "Playwright Automation Tutorial for Beginners from Scratch YouTube · Mukesh otwani 2.2L+ views · 1 year ago" [ref=e541] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=pq20Gd4LXeI
                - heading "Playwright Automation Tutorial for Beginners from Scratch" [level=3] [ref=e542]
                - generic [ref=e547]:
                  - generic [ref=e549]: YouTube · Mukesh otwani
                  - generic [ref=e551]: 2.2L+ views · 1 year ago
              - button "About this result" [ref=e552] [cursor=pointer]:
                - img [ref=e555]
            - generic [ref=e557]:
              - button "Playwright Automation Tutorial for Beginners from Scratch by Mukesh otwani on YouTube. Play on Google. 8:17:31" [ref=e558] [cursor=pointer]:
                - generic [ref=e560]:
                  - img [ref=e563]
                  - generic [ref=e566]:
                    - generic [ref=e567]: 8:17:31
                    - img [ref=e570]
              - generic [ref=e573]: Welcome to this Playwright Automation Tutorial for Beginners!. If you're planning to learn Playwright from scratch then your search ends ...
            - button "25 key moments in this video" [ref=e578] [cursor=pointer]:
              - generic [ref=e581]:
                - generic [ref=e584]: 25 key moments in this video
                - img [ref=e586]
            - generic [ref=e589]:
              - text: "Missing: talk ‎| Show results with:"
              - link "talk" [ref=e590] [cursor=pointer]:
                - /url: /search?sca_esv=829b6725c1213f11&q=playwright+by+testers+%22talk%22&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ5t4CegQIHhAy
        - generic [ref=e592]:
          - generic [ref=e597]:
            - heading "People also search for" [level=2] [ref=e599]
            - generic [ref=e601]:
              - generic [ref=e602]:
                - link "Playwright by testers talk pdf" [ref=e606] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Playwright+by+testers+talk+pdf&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAglEAE
                  - generic [ref=e607]:
                    - generic [ref=e612]: Playwright by testers talk pdf
                    - img [ref=e616]
                - link "Playwright by testers talk github" [ref=e621] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Playwright+by+testers+talk+github&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAg2EAE
                  - generic [ref=e622]:
                    - generic [ref=e627]: Playwright by testers talk github
                    - img [ref=e631]
                - link "Cypress by testers talk" [ref=e636] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Cypress+by+testers+talk&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAgzEAE
                  - generic [ref=e637]:
                    - generic [ref=e642]: Cypress by testers talk
                    - img [ref=e646]
                - link "Bakkappa Playwright" [ref=e651] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Bakkappa+Playwright&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAgxEAE
                  - generic [ref=e652]:
                    - generic [ref=e657]: Bakkappa Playwright
                    - img [ref=e661]
              - generic [ref=e663]:
                - link "Playwright tutorial" [ref=e667] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Playwright+tutorial&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAg1EAE
                  - generic [ref=e668]:
                    - generic [ref=e673]: Playwright tutorial
                    - img [ref=e677]
                - link "JavaScript by Testers Talk" [ref=e682] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=JavaScript+by+Testers+Talk&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAgyEAE
                  - generic [ref=e683]:
                    - generic [ref=e688]: JavaScript by Testers Talk
                    - img [ref=e692]
                - link "Playwright with TypeScript Training" [ref=e697] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Playwright+with+TypeScript+Training&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAgvEAE
                  - generic [ref=e698]:
                    - generic [ref=e703]: Playwright with TypeScript Training
                    - img [ref=e707]
                - link "Playwright tutorial PDF" [ref=e712] [cursor=pointer]:
                  - /url: /search?sca_esv=829b6725c1213f11&q=Playwright+tutorial+PDF&sa=X&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ1QJ6BAgoEAE
                  - generic [ref=e713]:
                    - generic [ref=e718]: Playwright tutorial PDF
                    - img [ref=e722]
          - navigation [ref=e724]:
            - heading "Page navigation" [level=1] [ref=e725]
            - text: "1"
            - link "Page 2" [ref=e728] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=10&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAE
              - text: "2"
            - link "Page 3" [ref=e730] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=20&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAG
              - text: "3"
            - link "Page 4" [ref=e732] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=30&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAI
              - text: "4"
            - link "Page 5" [ref=e734] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=40&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAK
              - text: "5"
            - link "Page 6" [ref=e736] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=50&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAM
              - text: "6"
            - link "Page 7" [ref=e738] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=60&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAO
              - text: "7"
            - link "Page 8" [ref=e740] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=70&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAQ
              - text: "8"
            - link "Page 9" [ref=e742] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=80&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAS
              - text: "9"
            - link "Page 10" [ref=e744] [cursor=pointer]:
              - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=90&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8tMDegQINBAU
              - text: "10"
            - heading "Next" [level=2] [ref=e746]:
              - link "Next" [ref=e747] [cursor=pointer]:
                - /url: /search?q=playwright+by+testers+talk&sca_esv=829b6725c1213f11&ei=Ww_eaZeCOOC9ruEP-_mpsA4&start=10&sa=N&sstk=Af77f_cLpbLq-3c5gx_Ouksop-zHbSfwSS7QvcLXaLaNLCPZxjmZyO5_94A-r1-A-dmsN27Xg02-VB9-OhZgcRs3VzSN_SXVs_szQg&ved=2ahUKEwjXm_Huie2TAxXgnisGHft8CuYQ8NMDegQINBAW
                - generic [ref=e749]: Next
        - navigation
    - contentinfo [ref=e750]:
      - heading "Footer links" [level=1] [ref=e751]
```

# Test source

```ts
  1  | //Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | //write a test
  4  | test.describe('smoke', () => {
  5  |     test('Test 1 - Annotations Test', async ({ page }) => {
  6  |         console.log('Test Esecution Started..');
  7  | 
  8  |         //navigate to url
  9  |         await page.goto('https://www.google.com/');
  10 |         //search with keywords
  11 |         await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
  12 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  13 |         //click on playlist
  14 |         await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  15 |         //validate webpage title
  16 |         await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
  17 |     })
  18 | });
  19 | test.describe('regression', () => {
  20 |     test('Test 2 - Annotations Test', async ({ page }) => {
  21 |         console.log('Test Esecution Started..');
  22 | 
  23 |         //navigate to url
  24 |         await page.goto('https://www.google.com/');
  25 |         //search with keywords
  26 |         await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
  27 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  28 |         //click on playlist
  29 |         await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  30 |         //validate webpage title
  31 |         await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
  32 |     })
  33 |     test('Test 3 - Annotations Test', async ({ page }) => {
  34 |         console.log('Test Esecution Started..');
  35 | 
  36 |         //navigate to url
  37 |         await page.goto('https://www.google.com/');
  38 |         //search with keywords
  39 |         await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
  40 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  41 |         //click on playlist
  42 |         await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  43 |         //validate webpage title
  44 |         await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
  45 |     })
  46 |    test('Test 4 - Annotations Test', async ({ page }) => {
  47 |         console.log('Test Esecution Started..');
  48 | 
  49 |         //navigate to url
  50 |         await page.goto('https://www.google.com/');
  51 |         //search with keywords
  52 |         await page.getByLabel('Search', { exact: true }).fill("playwright by testers talk");
  53 |         await page.getByLabel('Search', { exact: true }).press('Enter');
  54 |         //click on playlist
> 55 |         await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
     |                                                                                      ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  56 |         //validate webpage title
  57 |         await expect(page).toHaveTitle('Playwright Typescript by Testers Talk ✅ - YouTube');
  58 |     }) 
  59 | })
  60 | 
  61 | 
  62 | 
```