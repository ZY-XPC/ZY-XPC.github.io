


let textArr = [{
        name: 'h4',
        class: 'text-title',
        text: '      '
    },
    {
        name: 'h3',
        class: 'inten',
        text: '  谁  能想到,'
    }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        }, {
        name: 'h3',
        class: 'inten',
        text: '  故事  就这样  开始了  ……'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '  '
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'那是',
            children: [{
                name: 'span',
                class: 'tag',
                text: '8月9号'
            },{
                name: 'span',
                text: '，你刷到了我的答案，并评论了我，再后来私聊了我，接下来的事情'
            }, {
                name: 'span',
                class: 'tag',
                text: '你都知道了~'
            }]
        }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        }, {
            name: 'li',
            text:'说实话，',
            children: [{
                name: 'span',
                class: 'tag',
                text: '你很幸运'
            },{
                name: 'span',
                text: '，在合适的时间遇到了我。但我想，我更幸运，因为你等我比我等你更久。对吧，屏幕那端评论我'
            }, {
                name: 'span',
                class: 'tag',
                text: '“小姐姐可以么[捂嘴笑]”'
            },{
                name: 'span',
                text: '的大姐姐~'
            }]
        }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        }, {
            name: 'li',
            text:'你请我看电影那天，你问我，会遇到更好的吗？我说，会的。',
            children: [{
                name: 'span',
                class: 'tag',
                text: '显然，这个答案你并不满意。'
            },{
                name: 'span',
                text: '其实，在拉你手之前我就考虑过这个问题，而且我知道'
            }, {
                name: 'span',
                class: 'tag',
                text: '说一些甜言蜜语哄你开心更应景一些。'
            },{
                name: 'span',
                text: '但是，看到你还是很严肃的问我，我想我应该真诚地正面回答你。'
            }]
        },{
             name: 'h4',
             class: 'text-title',
             text: '  '
        },  {
            name: 'li',
            text:'是啊，大千世界，各个方面超过你我的人大有人在。但是，我更觉得，已经拥有的就是最好的，欲望是无穷尽的，这山望着那山高是不可取的；没必要去和别人浪费自己的时间和精力，有时间不如陪一陪身边人，做一做爱做的事。之前，我们聊过别人的出轨、分手，很多时候是因为孤单寂寞空虚和冷。这又与性是分不开的。年龄越大，越发现这些东西其实是可以忍受的，只是想不想罢了。'
        }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        }, {
            name: 'li',
            text:'还记得你小时候放学没人接你的故事吗？作为一个学校离家近、基本没有家长接过的孩子，',
            children: [{
                name: 'span',
                class: 'tag',
                text: '可能很难体会你的心境。'
            },{
                name: 'span',
                text: '我比较类似的经历可能就是，午睡醒了，发现身边空无一人，特别失落，孤独和无助吧。'
            }, {
                name: 'span',
                class: 'tag',
                text: '以后你孤单的时候，希望你来找我，让我一直陪着你。'
            }]
        }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        }, {
            name: 'li',
            text:'有人说，男人天生向往自由，但有时候男人又想要有一个家。',
            children: [{
                name: 'span',
                class: 'tag',
                text: '自由和束缚，看起来是相对的，但在这里并不是如此。'
            },{
                name: 'span',
                text: '和你在一起，我感到舒适，感到心安，在茫茫人海中感到安定。还有什么能比这让一个男人更安心的事呢？'
            }, {
                name: 'span',
                class: 'tag',
                text: '在家里，在床上，在身边，在眼前，那一刻的我们彼此毫不设防，没有距离。'
            }]
        }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        }, {
            name: 'li',
            text:'我不高、不帅，也没钱，和常人比也不够聪明，更没有什么家庭背景。但我想，',
            children: [{
                name: 'span',
                class: 'tag',
                text: '这算是我的优势，对自己有比较清楚的认识。'
            },{
                name: 'span',
                text: '想要的东西要靠自己的奋斗，未来不会是一帆风顺的，但希望'
            }, {
                name: 'span',
                class: 'tag',
                text: '我们都是彼此生命中极其重要的人。'
            }]
        }, {
             name: 'h4',
             class: 'text-title',
             text: '  '
        },  {
            name: 'li',
            text:'剩下的就交给时间吧。',
            children: [{
                name: 'span',
                class: 'tag',
                text: '岁月静好，愿与君老。'
            }]
        }
      ]
    }
]

let balloon = `
    <div class="balloon-wrap">
        <img src="static/images/1.jpg" id="bg-balloon-small">
        
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`

       /* <img src="static/images/logo.png" id="bg-balloon-logo">  */
