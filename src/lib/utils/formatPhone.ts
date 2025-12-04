/**
 * 전화번호에 하이픈을 삽입하는 함수
 * @param phone - 하이픈이 없는 전화번호 (예: "01012345678")
 * @returns 하이픈이 포함된 전화번호 (예: "010-1234-5678")
 */
export const formatPhone = (phone: string): string => {
  if (!phone) return '';
  
  // 숫자만 추출
  const cleaned = phone.replace(/\D/g, '');
  
  // 휴대폰 번호 (010, 011, 016, 017, 018, 019)
  if (cleaned.length === 11 && cleaned.startsWith('01')) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
  }
  
  // 서울 지역번호 (02)
  if (cleaned.length === 10 && cleaned.startsWith('02')) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  // 일반 지역번호 (031, 032 등)
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  // 일반 지역번호 (9자리)
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 5)}-${cleaned.slice(5)}`;
  }
  
  // 기타 형식은 그대로 반환
  return phone;
};

