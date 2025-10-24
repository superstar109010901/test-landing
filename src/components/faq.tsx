import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion";
  import { Plus } from "lucide-react";
  
  interface FAQItem {
    question: string;
    answer: string;
    id: string;
  }
  
  export default function FAQ() {
    const leftColumnFAQs: FAQItem[] = [
      {
        id: "left-1",
        question: "Is RoCart legit for buying Grow a Garden items?",
        answer:
          "Yes, RoCart is completely legitimate and trusted by thousands of players. We use secure payment processing and deliver items through safe, legitimate in-game trading methods. Our platform has completed countless successful transactions with a proven track record in the Grow a Garden community.",
      },
      {
        id: "left-2",
        question: "What is your refund policy?",
        answer:
          "We offer refunds if items are not delivered as described or if there are technical issues preventing delivery. Refund requests must be submitted within 24 hours of purchase. Once items are successfully delivered and traded to your account, they are non-refundable. Contact our support team for assistance with any delivery issues.",
      },
      {
        id: "left-3",
        question: "Can I get free Grow a Garden items?",
        answer:
          "While we occasionally run promotions and giveaways, we do not offer free items as a standard service. RoCart focuses on providing secure, reliable transactions for premium Grow a Garden items at competitive prices. Follow our social media for updates on special promotions and limited-time offers.",
      },
    ];
  
    const rightColumnFAQs: FAQItem[] = [
      {
        id: "right-1",
        question: "How do I claim my Grow a Garden items after purchasing?",
        answer:
          "After completing your purchase, you'll receive detailed delivery instructions via email and on-screen. Simply join the private server link provided, and our delivery bot will initiate a trade with you. Accept the trade to receive your items instantly. The entire process typically takes just a few minutes.",
      },
      {
        id: "right-2",
        question: "Can I trade my Grow a Garden items for items on RoCart?",
        answer:
          "Currently, RoCart operates as a purchase-only marketplace. We do not accept player items as trade-ins or currency. However, you can sell your valuable items through approved Roblox trading platforms and use those funds to purchase items from our shop.",
      },
      {
        id: "right-3",
        question: "What if I don't receive my Grow a Garden items after purchase?",
        answer:
          "If you experience any delivery issues, please contact our 24/7 customer support team immediately. Provide your order number and Roblox username, and we'll resolve the issue promptly. Most delivery problems are resolved within minutes, and we guarantee delivery of all purchased items.",
      },
    ];
  
    return (
      <div className="w-full max-w-[1600px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Have </span>
            <span className="text-[#13E97D]">Questions?</span>
            <span className="text-white"> We Got </span>
            <span className="text-[#13E97D]">You!</span>
          </h2>
          <p className="text-[#999999] text-sm font-medium">
            Got questions? We've got answers!
          </p>
        </div>
  
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-6">
            {leftColumnFAQs.map((faq) => (
              <FAQAccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                value={faq.id}
              />
            ))}
          </Accordion>
  
          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-6">
            {rightColumnFAQs.map((faq) => (
              <FAQAccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                value={faq.id}
              />
            ))}
          </Accordion>
        </div>
  
        {/* Disclaimer Section */}
        <div className="text-center space-y-6">
          <h3 className="text-4xl font-bold leading-normal">
            <span className="text-white">We Are Not Affiliated with Roblox Corporation </span>
            <span className="text-[#13E97D]">Big Games</span>
            <span className="text-white"> or </span>
            <span className="text-[#13E97D]">Uplift Games</span>
          </h3>
          <p className="text-[#999999] text-sm font-medium max-w-4xl mx-auto leading-relaxed">
            RoCart.com is not affiliated, associated, or partnered with Roblox
            Corporation, Big Games, Uplift Games, or any other game developers in
            any way. RoCart.com is an independent platform for digital skins & item
            sales and is not authorized, endorsed, or sponsored by Roblox
            Corporation, Big Games, Uplift Games or any of their affiliates. All
            trademarks and copyrights belong to their respective owners.
          </p>
        </div>
      </div>
    );
  }
  
  interface FAQAccordionItemProps {
    question: string;
    answer: string;
    value: string;
  }
  
  function FAQAccordionItem({ question, answer, value }: FAQAccordionItemProps) {
    return (
      <AccordionItem value={value} className="border-none">
        <div className="rounded-[20px] border border-[rgba(211,211,211,0.33)] bg-[#0E2514] overflow-hidden">
          <AccordionTrigger className="px-9 py-7 hover:no-underline group [&>svg]:hidden">
            <div className="flex items-center justify-between w-full">
              <span className="text-white text-xl font-semibold text-left leading-normal">
                {question}
              </span>
              <div className="relative w-[47px] h-[49px] flex-shrink-0 ml-4">
                <div
                  className="absolute left-[3px] top-[3px] w-[43px] h-[45px] rounded-lg opacity-50"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(61, 255, 136, 0.50) 0%, rgba(37, 153, 81, 0.50) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center group-data-[state=open]:rotate-45 transition-transform duration-200">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-9 pb-7 pt-0">
            <p className="text-white text-xl font-normal leading-normal">
              {answer}
            </p>
          </AccordionContent>
        </div>
      </AccordionItem>
    );
  }
  